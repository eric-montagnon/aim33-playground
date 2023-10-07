import nock from "nock";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

nock.emitter.on("no match", (req) => {
  console.error("UNMOCKED REQUEST : ", req.options);
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const crossFetch = require("cross-fetch");
global.fetch = crossFetch;
global.Response = crossFetch.Response;
global.Headers = crossFetch.Headers;
global.Request = crossFetch.Request;

nock.disableNetConnect();
