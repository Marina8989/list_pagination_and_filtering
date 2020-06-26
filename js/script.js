/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
 // storing the students list
 let listItem = document.querySelectorAll('.student-item');
 // number of the items to be shown on the page
 const numOfItemsToShow = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

 function showPage(list, page) {
    let startIndex = (page * numOfItemsToShow) - numOfItemsToShow;
    let endIndex = page * numOfItemsToShow;
     
    for(let i = 0; i < list.length; i++) {
        if(i >= startIndex  && i < endIndex) {
           list[i].style.display = 'block';
        }else {
           list[i].style.display = 'none';
        }
    }
 
   }

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
 function appendPageLinks(list) {
    // create elements
     const div = document.createElement('div');
     const ul = document.createElement('ul');
     const divPage = document.querySelector('.page');
     const liNum = Math.ceil(list.length / 10);

      for(let i = 0 ; i < liNum; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');

         a.setAttribute('href', '#');
         a.textContent = i + 1;
       
        if(parseInt(a.textContent) === 1) {
             a.className = 'active';
        }

         a.addEventListener('click', function (e) {
            const links = document.querySelectorAll('a');
            const pageNum = parseInt(e.target.textContent);

            for(let i = 0; i < links.length; i++) {
              const currentPage = links[i];
              const linkNumber = parseInt(currentPage.textContent);

              if(linkNumber === pageNum) {
                   currentPage.className = 'active';
              }else {
                 currentPage.removeAttribute('class');
              }
            }
            showPage(listItem, pageNum);

         })
         
         li.appendChild(a);
         ul.appendChild(li);
      }

      div.className = 'pagination';

      //append them to each other
      div.appendChild(ul);
      divPage.appendChild(div);
 }
 appendPageLinks(listItem);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
showPage(listItem, 1);