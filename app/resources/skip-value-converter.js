export class SkipValueConverter {
  toView(array, count) {
    return array.slice(count);
  }
}
