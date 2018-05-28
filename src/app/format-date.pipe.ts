import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: any): any {
    // newFormattedDate() {
    //   const now = new Date();
      const dd = date.getDate();
      const mm = date.getMonth() + 1;
      const yyyy = date.getFullYear();
      let hh: any = date.getHours();
      if (hh < 10) {
        hh = '0' + hh;
      }
      let m: any = date.getMinutes();
      if (m < 10) {
        m = '0' + m;
      }
      let ss: any = date.getSeconds();
      if (ss < 10) {
        ss = '0' + ss;
      }

      return `${dd}/${mm}/${yyyy}, ${hh}:${m}:${ss}`;
  }

}
