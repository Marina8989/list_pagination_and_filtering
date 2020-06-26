
 // storing the student's list
 let listItem = document.querySelectorAll('.student-item');
 // number of the items to be shown on the page
 const numOfItemsToShow = 10;


//show only the 10 students per page
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


//function to generate and append new elements to the page
 function appendPageLinks(list) {
    // create elements
     const div = document.createElement('div');
     const ul = document.createElement('ul');
   // element that div will be appended to with all lis and links  
     const divPage = document.querySelector('.page');
   //number of pages to be displayed
     const liNum = Math.ceil(list.length / 10);
   //create # of lis and links depending on how many pages on the screen
      for(let i = 0 ; i < liNum; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
   // add href attributes and text content to links
         a.setAttribute('href', '#');
         a.textContent = i + 1;
   // add default class to the first link    
        if(parseInt(a.textContent) === 1) {
             a.className = 'active';
        }
   // add class 'active' to the link that was clicked on
         a.addEventListener('click', function (e) {
          //collect node list of the links  
            const links = document.querySelectorAll('a');
          //convert the textContent to number   
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

        // append link to list and to ul 
         li.appendChild(a);
         ul.appendChild(li);
      }
   // add class to the div
      div.className = 'pagination';

   //append them to each other
      div.appendChild(ul);
      divPage.appendChild(div);

 }

appendPageLinks(listItem);
showPage(listItem, 1);



    

  


 
