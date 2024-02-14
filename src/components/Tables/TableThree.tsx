import { Package } from "@/types/package";
import { SlOptions } from "react-icons/sl";

const packageData: Package[] = [
  {
    image: "https://images.rawpixel.com/image_png_1100/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMS5wbmc.png",
    nome: "Maria Jose",
    aroba: "@mariajose",
    data: `17-05-2015`,
    email: "mariajose@gmail.com",
  },
  {
    image: "https://praanaim.com/wp-content/uploads/2016/05/Ruchika-Profile-round-shot-1024x1024.jpg",
    nome: "Maria Jose",
    aroba: "@mariajose",
    data: `17-05-2015`,
    email: "mariajose@gmail.com",

  },
  {
    image: "https://2023.emnlp.org/assets/images/committee/sac/ParthaPratimTalukdar.jpg",
    nome: "Maria Jose",
    aroba: "@mariajose",
    data: `17-05-2015`,
    email: "mariajose@gmail.com",
  },
  
];

const TableThree = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white  py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h2 className="pl-8 text-xl font-semibold text-white pb-2">Usuarios Recentes</h2>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className=" text-left ">
              <th className="min-w-[180] px-4 font-medium text-black dark:text-white xl:pl-8">
                Nome
              </th>
              <th className="min-w-[180px] px-4 font-medium text-black dark:text-white">
                Email
              </th>
              
              <th className="px-4 font-medium text-black dark:text-white">
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-4  dark:border-slate-600 xl:pl-8">
                  <div className="flex items-center">
                    <div className="mr-2">
                        <img src={packageItem.image} className="w-[39px] rounded-full " alt="" />
                    </div>
                    <div>
                      <h5 className="font-medium text-black dark:text-[#dcdcdc]">
                        {packageItem.nome}
                      </h5>
                      <p className="text-sm">{packageItem.aroba}</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-[#eee] px-4  py-4 dark:border-slate-600">
                  <p className="text-black dark:text-[#dcdcdc]">
                    {packageItem.email} 
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-4 dark:border-slate-600">
                <p className="text-black dark:text-[#dcdcdc] text-sm">
                    {packageItem.data}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-4 dark:border-slate-600">
                  <SlOptions />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
