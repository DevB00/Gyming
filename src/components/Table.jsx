import { twMerge } from "tailwind-merge";
const Table = ({ Day = "Monday" }) => {
  return (
    <table className="border-collapse border-[1px] border-white mx-4">
      <tbody>
        <tr>
          <th className="border-[1px] border-white py-12 px-1 sm:px-8 md:px-16">
            Fitness Class
          </th>
          <td
            className={twMerge(
              `border-[1px] border-white px-1 sm:px-8 md:px-16  text-white transition-all duration-700 font-semibold`,
              `${
                Day === "Monday" || Day === "Friday"
                  ? "text-opacity-100"
                  : "text-opacity-0"
              }`
            )}
          >
            10:00AM - 11:30AM
          </td>
          <td
            className={twMerge(
              `border-[1px] border-white px-1 sm:px-8 md:px-16 text-white transition-all duration-700 font-semibold`,
              `${Day === "Tuesday" ? "text-opacity-100" : "text-opacity-0"}`
            )}
          >
            2:00PM - 3:30PM
          </td>
          <td className="border-[1px] border-white px-1 sm:px-8 md:px-16">
            William G. Stewart
          </td>
        </tr>
        <tr>
          <th className="border-[1px] border-white py-12 px-1 sm:px-8 md:px-16">
            Muscle Training
          </th>
          <td
            className={twMerge(
              `border-[1px] border-white px-1 sm:px-8 md:px-16 text-white transition-all duration-700 font-semibold`,
              `${Day === "Thursday" ? "text-opacity-100" : "text-opacity-0"}`
            )}
          >
            10:00AM - 11:30AM
          </td>
          <td
            className={twMerge(
              `border-[1px] border-white px-1 sm:px-8 md:px-16  text-white transition-all duration-700 font-semibold`,
              `${Day === "Wednesday" ? "text-opacity-100" : "text-opacity-0"}`
            )}
          >
            2:00PM - 3:30PM
          </td>
          <td className="border-[1px] border-white px-1 sm:px-8 md:px-16">
            Paul D. Newman
          </td>
        </tr>
        <tr>
          <th className="border-[1px] border-white py-12 px-1 sm:px-8 md:px-16">
            Body Building
          </th>
          <td
            className={twMerge(
              `border-[1px] border-white px-1 sm:px-8 md:px-16  text-white transition-all duration-700 font-semibold`,
              `${Day === "Tuesday" ? "text-opacity-100" : "text-opacity-0"}`
            )}
          >
            10:00AM - 11:30AM
          </td>
          <td
            className={twMerge(
              `border-[1px] border-white px-1 sm:px-8 md:px-16 text-white transition-all duration-700 font-semibold`,
              `${
                Day === "Monday" || Day === "Friday"
                  ? "text-opacity-100"
                  : "text-opacity-0"
              }`
            )}
          >
            2:00PM - 3:30PM
          </td>
          <td className="border-[1px] border-white px-1 sm:px-8 md:px-16">
            Boyd C. Harris
          </td>
        </tr>
        <tr>
          <th className="border-[1px] border-white py-12 px-1 sm:px-8 md:px-16">
            Yoga Training Class
          </th>
          <td
            className={twMerge(
              `border-[1px] border-white px-1 sm:px-8 md:px-16 text-white transition-all duration-700 font-semibold`,
              `${Day === "Wednesday" ? "text-opacity-100" : "text-opacity-0"}`
            )}
          >
            10:00AM - 11:30AM
          </td>
          <td
            className={twMerge(
              `border-[1px] border-white px-1 sm:px-8 md:px-16 text-white transition-all duration-700 font-semibold`,
              `${Day === "Thursday" ? "text-opacity-100" : "text-opacity-0"}`
            )}
          >
            2:00PM - 3:30PM
          </td>
          <td className="border-[1px] border-white px-1 sm:px-8 md:px-16">
            Hector T. Daigle
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
