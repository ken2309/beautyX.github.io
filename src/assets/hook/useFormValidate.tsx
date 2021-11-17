import { useState } from "react";

let nameVNPattern =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
  enterprisePattern =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ0-9\s\W|_]+$/,
  phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  emailPattern =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,
  numberPatern = /[0-9]/;
interface IErr {
  name: string;
  email: string;
  phone?: number;
  enterprise: string;
  address: string;
  quantity: string;
}
export default function useFormValidate(initialForm: any, validate: any) {
  let [form, setForm] = useState(initialForm);
  let [error, setError] = useState<IErr>({
    name: "",
    email: "",
    enterprise: "",
    address: "",
    quantity: "",
  });
  function inputChange(e: any) {
    let name = e.target.name;
    let value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function check() {
    let errObj: any = {};
    let { rule, message } = validate;
    if (!message) {
      message = {};
    }

    for (let i in rule) {
      let r = rule[i];
      let m = message[i] || {};

      if (r.required && !form[i]?.trim()) {
        errObj[i] = m?.required || "Trường này không được bỏ trống";
        continue;
      }
      if (r.pattern && form[i]) {
        let { pattern } = r;
        if (pattern === "name") pattern = nameVNPattern;
        if (pattern === "enterprise") pattern = nameVNPattern;
        if (pattern === "email") pattern = emailPattern;
        if (pattern === "phone") pattern = phonePattern;
        if (pattern === "address") pattern = enterprisePattern;
        if (pattern === "quantity") pattern = numberPatern;
        if (!pattern?.test(form[i])) {
          errObj[i] = m?.pattern || ["Trường này không đúng định dạng"];
        }
      }
      if (r.min) {
        if (form[i].length < r.min) {
          errObj[i] = m?.min || `Không được nhỏ hơn ${r.min} ký tự`;
        }
      }
      if (r.max) {
        if (form[i].length > r.max) {
          errObj[i] = m?.max || `Không được lớn hơn ${r.max} ký tự`;
        }
      }
    }

    setError(errObj);
    return errObj;
  }
  return { form, error, inputChange, check };
}
