// function highlight(table) {
//
//   const list = document.querySelectorAll('tbody');
//
//   for (const item of list) {
//     const trList = item.rows;
//
//     for (const node of trList) {
//       const tdArr = node.cells;
//
//       for (const cell of tdArr) {
//         // Выделение занят/не занят
//         if (!cell.hasAttribute('data-available')) {
//           node.setAttribute('hidden', '');
//         } else {
//           cell.dataset.available === 'true' ? node.classList.add('available') : node.classList.add('unavailable');
//           node.removeAttribute('hidden');
//         }
//         //   Проверка пола
//         node.cells[2].innerHTML === 'm' ? node.classList.add('male') : node.classList.add('female');
//         //   Проверка возраста
//         node.cells[1].innerHTML < 18 ? node.style.textDecoration = 'line-through' : '';
//       }
//     }
//   }
// }
const FIRST_COLUMN = 1;
const SECOND_COLUMN = 2;
const THIRD_COLUMN = 3;

function highlight(table) {
  // ваш код...
  const actions = {
    [THIRD_COLUMN]: (root, td) => {
      if (td.dataset.available === 'true') {
        root.classList.toggle('available', true);
      } else if (td.dataset.available === 'false') {
        root.classList.toggle('unavailable', true);
      } else if (!td.hasAttribute('data-available')) {
        root.hidden = true;
      }
    },
    [SECOND_COLUMN]: (root, td) => {
      if (td.textContent === 'm') {
        root.classList.toggle('male', true);
      } else if (td.textContent === 'f') {
        root.classList.toggle('female', true);
      }
    },
    [FIRST_COLUMN]: (root, td) => {
      const age = parseInt(td.textContent, 10);

      if (age < 18) {
        root.style.textDecoration = 'line-through';
      }
    },
  };

  for (const tr of table.rows) {
    Array.from(tr.cells).forEach((td, index) => {
      const fn = actions[index];

      if (typeof fn === 'function') {
        fn(tr, td);
      }
    });
  }
}
