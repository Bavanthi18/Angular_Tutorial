import { AbstractControl } from "@angular/forms";

export class CustomValidator {

  static ValidateName({ control }: { control: AbstractControl; }){
    const value = control.value as string;
    if(value.includes('test')){
      return {
        invalidName: true;

    }
    return null;
    };
  }

    static ValidaeSpecialChar(control: AbstractControl) {
      const value =control.value as string;
      if(value.includes('!')){
        return {
          invalidSpecialChar: true
        }

      return null;
    };
}

  static Validaedate(control: AbstractControl) {
  const checkinDate =control.get('checkinDate')?.value;
  const checkoutDate =control.get('checkoutDate')?.value;
  if(checkinDate > checkoutDate) {
    return {
      invalidDate: true;
    };

  }
  return null;
}
}


