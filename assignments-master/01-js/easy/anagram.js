/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
          let ans=true;
          const n1=str1.length;
          const n2=str2.length;

          if(n1!=n2)
          return false;

         let s1=str1.toLowerCase();
         let s2=str2.toLowerCase();
         console.log("s1: ",s1);
         
         console.log(s1.split("").sort().join(""));
         console.log("s2: ",s2);
         console.log(s2.split("").sort().join(""));

         if(s1.split("").sort().join("") == s2.split("").sort().join(""))
         return true;
        else
        return false;
          
          // let arr = [];
          // for(let i=0;i<s1.length;i++)
          // {
          //     let value = s1[i].charCodeAt([0]);
          //     // console.log("char: ",s2[i]);
          //     // console.log("value: ",value);
          //     arr[value]+=1;
          // } 
          // for(let i=0;i<s2.length;i++)
          // {
          //     let value = s2[i].charCodeAt([0]);
          //     // console.log("char: ",s2[i]);
          //     // console.log("value: ",value);
          //     arr[value]-=1;
          // } 
         


          // console.log("len: ",arr.length);
          // for(let i=0;i<arr.length;i++)
          // {
          //   // console.log("Hi");
          //   // console.log(arr[i]);
          //   if(arr[i]!=0 && arr[i]!=undefined)
          //   {
          //     ans=false;
          //     break;
          //   }
          // }

        return ans;
}

module.exports = isAnagram;
