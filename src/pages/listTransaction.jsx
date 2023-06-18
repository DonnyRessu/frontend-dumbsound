import { IoMdArrowDropdownCircle } from "react-icons/io";

const ListTransaction = () => {
  return (
    <>
      <div className="px-20 bg-black py-10">
        <div className="container mx-auto py-20 h-[100vh]">
          <h2 className="font-bold text-white text-lg mb-5">
            Incoming Transaction
          </h2>
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Remaining Active</th>
                <th>Status User</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Anjink</td>
                <td>20 hari</td>
                <td>active</td>
                <td>success</td>
                <td className="relative">
                  <button className="pl-3">
                    <IoMdArrowDropdownCircle className="text-2xl text-sky-500" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListTransaction;
