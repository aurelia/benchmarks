import {createBenchmark} from '../container';

export default createBenchmark(
  (container, ctor) => container.registerInstance(ctor, 'How much do you bench?'));
