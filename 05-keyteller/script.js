// const insert = document.getElementById('insert');

// window.addEventListener('keydown', (e) => {
//   insert.innerHTML = `
//     <div class='color'>
//     <table>
//     <tr>
//       <th>Key</th>
//       <th>Keycode</th> 
//       <th>Code</th>
//     </tr>
//     <tr>
//       <td>${e.key === ' ' ? 'Space' : e.key}</td>
//       <td>${e.keyCode}</td> 
//       <td>${e.code}</td>
//     </tr>
    
//   </table>
//     </div>
//   `;
// });




// const insert = document.querySelector('.project')


// insertElement.innerHTML = `
//         <tr>
//           <th>Key</th>
//           <th>Code</th>
//           <th>Key Code</th>
//         </tr>
// `
const insert = document.querySelector('.project')
const insertElement = document.createElement('table')
insert.append(insertElement)
window.addEventListener('keydown',(e) =>{

  setTimeout(() => {
    <table>
    <tr>
      <th>Key</th>
      <th>Code</th>
      <th>Key Code</th>
    </tr>

    <tr>
    <td>${e.key}</td>
    <td>${e.code}</td>
    <td>${e.keyCode}</td>
    </tr>
  </table>

  }, 3000);
  
// insertElement.innerHTML += `
//          <tr>
//             <td>${e.key}</td>
//             <td>${e.code}</td>
//             <td>${e.keyCode}</td>
//          </tr>

// `


})




