import React from "react";
import {TextInput, ButtonPrimary} from "@primer/components";

function MobileId(props) {
  // const [input, setInput] = useState({
  //   idCode: '',
  //   phoneNumber: '',
  // });

  return (
    <div>
      <div>
        <label>Isikukood</label>
        <TextInput aria-label="Isikukood" name="idCode" />
      </div>
      <div>
        <label>Telefoni number</label>
        <TextInput aria-label="Telefoni number" name="phoneNumber" />
      </div>

      <ButtonPrimary width={1} mb={7} onClick={() => console.log('forward')}>
        Edasi
      </ButtonPrimary>

    </div>
  );

}

export default MobileId;
