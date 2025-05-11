'use client'
import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";

function CreateNew() {
  const [formData, setFormData] =useState([])
  const onHandleInputChange = (fieldName,fieldValue) => {
    console.log(fieldName, fieldValue);
  } 
  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-indigo-600 text-center mt-5">
        Create New Video
      </h2>
      <div className="shadow-md rounded-lg p-10 mt-10 bg-white">
        {/* SELECT TOPIC  */}
        <SelectTopic onUserSelect={onHandleInputChange} />
        {/* SELECT STYLE */}
        {/* DURATION */}
        {/* CREATE BUTTON */}
      </div>
    </div>
  );
}

export default CreateNew;
