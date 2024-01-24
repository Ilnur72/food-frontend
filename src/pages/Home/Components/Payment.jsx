import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { nextPage } from "../../../store/nextSlice";

const Payment = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="pt-16">
      <div className="flex flex-col gap-3 pb-6">
        <h2 className="text-3xl font-semibold">Payment</h2>
        <p className="text-base font-medium">3 payment method available</p>
      </div>
      <hr className="border border-gray-700" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Payment Method</h3>
        <form
          className="flex flex-col gap-6 py-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-base font-medium">
            Cardholder Name
            <input
              {...register("cardholder_name", { required: true })}
              placeholder="Levi Ackerman"
              style={{ background: "#2D303E", color: "#E0E6E9" }}
              className="w-full h-12 rounded-lg p-3
        border border-zinc-600 focus:border-white outline-none"
              type="text"
            />
          </label>

          <label className="text-base font-medium">
            Card Number
            <Controller
              name="card_number"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <input
                  className="w-full h-12 rounded-lg p-3
        border border-zinc-600 focus:border-white outline-none"
                  style={{ background: "#2D303E", color: "#E0E6E9" }}
                  maxLength={19}
                  {...register("card_number", {
                    required: true,
                    maxLength: 19,
                    minLength: 19,
                  })}
                  type="text"
                  placeholder="2564 1421 0897 1244"
                  value={field.value}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    let formattedValue = "";

                    for (let i = 0; i < value.length; i++) {
                      if (i > 0 && i % 4 === 0) {
                        formattedValue += " ";
                      }
                      formattedValue += value[i];
                    }

                    field.onChange(formattedValue);
                  }}
                />
              )}
            />
          </label>

          <div className="flex">
            <label className="text-base font-medium">
              Expiration Date
              <Controller
                name="expiration_date"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <input
                    {...register("expiration_date", {
                      required: true,
                    })}
                    maxLength={7}
                    placeholder="02/2022"
                    style={{ background: "#2D303E", color: "#E0E6E9" }}
                    className="w-48 h-12 rounded-lg pl-2
        border border-zinc-600 focus:border-white outline-none"
                    type="text"
                    value={field.value}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      let formattedValue = "";

                      for (let i = 0; i < value.length; i++) {
                        if (i === 2) {
                          formattedValue += "/";
                        }
                        formattedValue += value[i];
                      }

                      field.onChange(formattedValue);
                    }}
                  />
                )}
              />
            </label>
            <label className="text-base font-medium">
              CVV
              <input
                {...register("CVV", {
                  required: true,
                  minLength: 3,
                  pattern: /^\d+$/,
                })}
                maxLength={3}
                type="text"
                autoComplete="off"
                placeholder="123"
                style={{ background: "#2D303E", color: "#E0E6E9" }}
                className="w-48 h-12 rounded-lg pl-2
        border border-zinc-600 focus:border-white outline-none"
              />
            </label>
          </div>
          <div className="w-full grid grid-cols-2 gap-2">
            <button
              onClick={() => dispatch(nextPage(true))}
              className="col-span-1 text-orange rounded-lg border border-orange p-3 text-base font-semibold"
              type="button"
            >
              Cancel
            </button>
            <button
              className="col-span-1 bg-orange rounded-lg p-3 text-base font-semibold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
