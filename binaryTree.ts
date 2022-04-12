let finalResults:string[] = [];
  const computePermutation = (input:string):any => {
      let resultsAux:string[] = [];
      let startFound = false;
      
      for (let i=0; i<input.length; i++ ) {
          if (input[i] === '*' && startFound===false) {
              startFound = true;
               let inputArray:string[] = input.split('')
               inputArray[i] = '0'
              resultsAux.push(inputArray.join(''))
              inputArray[i] = '1'
              resultsAux.push(inputArray.join(''))

              computePermutation(resultsAux[0])
              computePermutation(resultsAux[1])
          
          } else if (i===input.length-1 && startFound===false){
              console.log("we are in a leaf : " , input)
              finalResults.push(input);

          }
      }
      return finalResults;

  }

  console.log('Final result : ' , computePermutation('1*0*1'));
