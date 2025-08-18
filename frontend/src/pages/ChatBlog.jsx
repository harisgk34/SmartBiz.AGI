
const ChatBlog = () => {
  return (
    
<div className="chat-blog-container bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10 px-4 pt-28">
    <h1 className="  ">Article Automation</h1>
    <form className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10 px-4 pt-28 " action="https://hook.eu2.make.com/6kpmq7y1exlmtdn3aqriwdcfs1w9g3u9" method="POST">
       
        <label className="flex" >Topic:</label>
        <input  className="flex border-black" type="text" id="Topic" name="Topic" required> 
 </input>
        <label >Keyword 1:</label>
        <input type="text" id="keyword 1" name="keyword 1" required>
     </input>
        <label >Affiliate Link:</label>
        <input type="Affiliate Link" id="Affiliate Link" name="Affiliate Link" required>
 </input>
 <label >ad_link:</label>
        <input type="text" id="ad_link" name="ad_link" required></input>

 <label >audience:</label>
        <input type="text" id="audience" name="audience" required>
 </input>
 <label >statagy:</label>
        <input type="text" id="statagy" name="statagy" required>
 </input>
 <label >label:</label>
        <input type="text" id="label" name="label" required>
 </input>
        <button type="submit">Submit</button>
    </form>
</div>



  )
}

export default ChatBlog;

// import React from 'react'

// const ChatBlog = () => {
//   return (
//     <div>ChatBlog</div>
//   )
// }

// export default ChatBlog
