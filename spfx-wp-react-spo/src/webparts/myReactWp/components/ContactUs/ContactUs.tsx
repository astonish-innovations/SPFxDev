import * as React from "react";
// import { IContactUsProps } from "./IContactUsProps";

// export default function ContactUs(): React.ReactElement {
//     return (
//       <div className={`ms-Grid-row`}>
//         <h1 className={`ms-Grid-col ms-sm12 ms-xl12`}>Contact Us Functional</h1>
//       </div>
//     );
// }

interface IContactUsProps {
	heading: string;
}

const ContactUs: React.FunctionComponent<IContactUsProps> = (props:IContactUsProps) => {
    return (
      <div className={`ms-Grid-row`}>
        <h1 className={`ms-Grid-col ms-sm12 ms-xl12`}>
          {props.heading}
        </h1>
      </div>
    );
}

export default ContactUs;
