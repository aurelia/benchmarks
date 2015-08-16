export function configure(framework) {
  framework.globalResources(
    './skip-value-converter',
    './take-value-converter'
  );
}
