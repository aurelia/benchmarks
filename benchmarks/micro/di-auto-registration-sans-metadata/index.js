import {createBenchmark} from '../container';

export default createBenchmark(
  (container, ctor) => container.autoRegister(ctor));
