import { React } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

const Styles = styled.div`
 padding: 10px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   text-align:left;
   margin: 10px 0; 
 }

 .error {
   text-align: left;
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
`;

function AddListItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .get("http://localhost:4000/fridge/items/")
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.data));
  };

  const onError = (errors) => {
    console.log("ERRROR oh no");
  };

  const handleBlur = (e) => {
    console.log("blurring " + e.target.name);
  };

  return (
    <Styles>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label>Name</label>
        <select name="name" {...register("itemName")} onBlur={handleBlur}>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="addNewItem">Add New Item</option>
        </select>
        <label>Quantity</label>
        <input
          name="quantity"
          type="number"
          {...register("quantity", { required: true, min: 1 })}
        />
        <span className="error">
          {errors?.quantity?.type === "min" && <p>Minimum is 1</p>}
          {errors?.quantity?.type === "required" && <p>Quantity is required</p>}
        </span>
        <label>Purchased On</label>
        <input
          name="dateAdded"
          type="date"
          {...register("dateAdded", { required: true })}
        />
        <span className="error">
          {errors?.dateAdded?.type === "required" && <p>Date is required</p>}
        </span>
        <label>Day(s) Until Expiry</label>
        <input
          name="dayBest"
          type="number"
          {...register("daysToExpire", { required: true, min: 1 })}
        />
        <span className="error">
          {errors?.dayBest?.type === "min" && <p>Minimum is 1</p>}
          {errors?.dayBest?.type === "required" && (
            <p>*Expiry information is required</p>
          )}
        </span>
        <input type="submit" value="Add" />
      </form>
    </Styles>
  );
}

export default AddListItem;
