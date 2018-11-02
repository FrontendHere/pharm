export function loadingDecorator(target: Object, propertyKey: string, descriptor: any): TypedPropertyDescriptor<any> {

  const originalMethod = descriptor.value;

  descriptor.value = async function(...args: any[]) {
    this.loading = true;
    let result: Promise<any> = null;
    try {
      result = await originalMethod.apply(this, args);
    } catch (e) {
      this.loading = false;
      return e;
    } finally {
      this.loading = false;
      return result;
    }
  };

  return descriptor;
}
