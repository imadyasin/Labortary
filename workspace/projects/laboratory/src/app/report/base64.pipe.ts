import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64'
})
export class Base64Pipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const base64 = "data:image/jpeg;base64," + value

    return base64;
  }

}
