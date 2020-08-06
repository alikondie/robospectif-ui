import React from "react";
import { useField } from "formik";
import AsyncSelect from "react-select/async";
import styled from "styled-components";

export const StyledASelect = styled(AsyncSelect)`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  margin: 0% 35%;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  width: auto;
`;

export const SelectAsync = (props) => {
  const [field, meta, helpers] = useField(props);
  // console.log("field ", field);
  // console.log("meta ", meta);
  // console.log("helpers ", helpers);
  //console.log(props);
  // const onChange = () => {
  //   field.value =
  // };

  return (
    <>
      <StyledASelect
        {...props}
        onChange={(option) => {
          helpers.setValue(option.value);
        }}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
