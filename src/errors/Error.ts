// export class HttpError extends Error {
//     httpCode: number;
//     errors: any;
//     constructor(httpCode: number, message?: string, errors?:any){
//         super();
//         Object.setPrototypeOf(this, HttpError.prototype);
//         if(httpCode){
//             this.httpCode= httpCode;
//         }
//         if(message){
//             this.message =  message;
//         }
//         if(errors){
//             if(Array.isArray(errors)){
//                 this.errors =  errors;
//             }else{
//                 this.errors=[errors];
//             }
//         }
//     }
// }