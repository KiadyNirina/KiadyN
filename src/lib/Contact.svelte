<script>

</script>
  
<div class="row"></div>
<div class="content">
    <h1>Contact me</h1>
    <p>Ready to bring your ideas to life? Let's talk! Send me a message and let's create together.</p>
  
    <form>
      <div class="input">
        <label for="name">Name</label>
        <input type="text" id="name" required>
      </div>
      <div class="input">
        <label for="email">Email</label>
        <input type="email" id="email" required>
      </div>
      <div class="input mess">
        <label for="message">Message</label>
        <textarea id="message" required></textarea>
      </div>
      <button type="submit">
        Send message
      </button>
    </form>
</div>

<style>

.content{
    margin-top: 50px;
}
.content h1{
    font-family: "rubik";
    text-align: center;
    font-size: 50px;
}
.content p{
    font-family: 'poppins';
    text-align: center;
    font-size: 15px;
    color: white;
    margin-bottom: 20px;
}
.content form {
    background-color: rgba(255, 255, 255, 0.049);
    padding: 20px;
    border-radius: 5px;
}
.content form .input {
    width: 100%;
    margin-bottom: 10px;
}
.content form .input label{
    font-family: 'poppins';
    color: white;
}
.content form .input input{
    width: 99%;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: rgba(15, 55, 100, 0.589);
    font-size: 15px;
    font-family: 'poppins';
    color: white;
    padding-left: 5px;
}
.content form .mess textarea{
    width: 99%;
    height: 150px;
    border-radius: 5px;
    border: none;
    background-color: rgba(15, 55, 100, 0.589);
    font-size: 15px;
    font-family: 'poppins';
    color: white;
    padding-left: 5px;
}
.content form button{
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: rgb(0, 98, 255);
    color: white;
    font-family: 'poppins';
    font-size: 15px;
}
.content form button:hover{
    cursor: pointer;
    background-color: rgb(0, 132, 255);
}
</style>