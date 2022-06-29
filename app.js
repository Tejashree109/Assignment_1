const mongoose = require("mongoose");
//connection creation and creation  a new db
mongoose.connect("mongodb://localhost:27017/assignment",
{ useNewUrlParser :true,
// useCreateIndex : true,
// useFindAndModify : true, 
useUnifiedTopology : true}).then(()=>console.log("connected")).catch((err)=>console.log(err));


const playlistSchema = new mongoose.Schema({
name: String,
img: String,
summary: String



 })
 const PlayList = new mongoose.model("Playlist",playlistSchema);
 const createDocument = async()=>{
    try{
//creating document
const jsPlaylist = new PlayList({
    name: "Harry Potter and the Order of the Phoenix",
    img: "https://bit.ly/2IcnSwz",
    summary: "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry."

})
const reactPlaylist = new PlayList({
    name: "The Lord of the Rings: The Fellowship of the Ring",
    img: "https://bit.ly/2tC1Lcg",
    summary: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."

})
const csPlaylist = new PlayList({
    name: "Avengers: Endgame",
    img: "https://bit.ly/2Pzczlb",
    summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America, and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
})


const result = await PlayList.insertMany([jsPlaylist,reactPlaylist,csPlaylist]);
console.log(result);
}catch(err){
    console.log(err);
}
 }
// createDocument();//creating

const getData = async  () => {
    try{
    const result = await PlayList.find({name: "Avengers: Endgame"}).select({name:1, summary:1});//Reading
    console.log(result);
    }catch(err){
        console.log(err);
    }

}
// getData();

const getUpdate = async (_id) => {
    try{
        const result = await PlayList.updateOne({_id},{
            $set : {name : "Avengers"}
        });
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
getUpdate("62bbe37f8252cdd8e5ee8dc7");