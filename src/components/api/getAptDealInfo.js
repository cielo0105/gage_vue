// fetch('/house/dealinfo?aptNo=' + code)
//         .then((response) => response.json())
//         .then((data) => {
//           let infoList = data.data
//           let table = document.getElementById('table-history')

//           for (let i = 0; i < infoList.length; i++) {
//             let element = infoList[i]
//             let item = `<tr>
//               <td>${changeMoney(element.dealAmount)}</td>
//               <td>${element.dealYear}년 ${element.dealMonth}월 ${element.dealDay}일</td>
//               </tr>`
//             table.innerHTML += item

//             if (document.getElementById('curCost').innerHTML == '') {
//               document.getElementById('curCost').innerHTML = changeMoney(element.dealAmount)
//             }
//           }
//         })
import axios from 'axios'

export const getAptDealInfo = async (code) => {
  const res = await axios.get(`/house/dealinfo?aptNo=${code}`)
  const apt = await res.data.data[0]
  console.log(apt)
  return apt
}
