import AsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import "@testing-library/jest-native/extend-expect";

// Option `fakeTimers: { enableGlobally: true }` in jest.config.js can make some tests time out with RNTL.
// It only works with the manual setup.
// https://github.com/callstack/react-native-testing-library/issues/1347
beforeEach(() => {
  // we should not fake nextTick and setImmediate because of an ongoing issue between nock and
  // jest new fake timers implementation https://github.com/nock/nock/issues/2200
  jest.useFakeTimers({ doNotFake: ["nextTick", "setImmediate"] });
});

afterEach(() => {
  AsyncStorage.clear();
});
