
const express = require("express") 
const path = require("path") 
const multer = require("multer") 
const app = express();
const Gtts = require('gtts');
    
// View Engine Setup 
app.set("views",path.join(__dirname,"views")) 
app.set("view engine","ejs") 
app.use(express.static('public'));

// var upload = multer({ dest: "Upload_folder_name" }) 
// If you do not want to use diskStorage then uncomment it 
    
var storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
  
        // Uploads is the Upload_folder_name 
        cb(null, "uploads") 
    }, 
    filename: function (req, file, cb) { 
      cb(null, file.fieldname + "-" + Date.now()+".jpg") 
    } 
  }) 
       
// Defined the maximum size for uploading 
// picture i.e. 10 MB. (it is optional)
const maxSize = 10 * 1000 * 1000; 
    
var upload = multer({  
    storage: storage, 
    limits: { fileSize: maxSize }, 
    fileFilter: function (req, file, cb){ 
    
        // Set the filetypes, it is optional as well
        var filetypes = /jpeg|jpg|png/; 
        var mimetype = filetypes.test(file.mimetype); 
  
        var extname = filetypes.test(path.extname( 
                    file.originalname).toLowerCase()); 
        
        if (mimetype && extname) { 
            return cb(null, true); 
        } 
      
        cb("Error: File upload only supports the "
                + "following filetypes - " + filetypes); 
      }  
  
// mypic is the name of file attribute 
}).single("mypic");        
  
app.get("/",function(req,res){ 
    res.render("Signup",{details: null}); 
}) 


let processedDetails={
    name: "Paracetamol",
    price: 100,
    manu: "CIPLA",
    comp: "Acetaminophen",
    uses: "Allergy, Cough, Fever, Headache, Cold",
    side:  "Allergic reactions like hives and redness of the skin, Rash, Swellings (face, throat, tongue, etc.)",
}
app.post("/uploadMedicine",function (req, res, next) { 
        
    // Error MiddleWare for multer file upload, so if any 
    // error occurs, the image would not be uploaded! 
    upload(req,res,function(err) { 
  
        if(err) { 
  
            // ERROR occured (here it can be occured due 
            // to uploading image of size greater than 
            // 10MB or uploading different file type) 
            console.log(err)
            res.send(err) 
        } 
        else { 
  
            // SUCCESS, image successfully uploaded 
            res.render("Signup",{details: processedDetails}); 
        } 
    }) 
}) 

// Open url to hear Hallelujah http://localhost:3000/hear?lang=en&text=Hallelujah
app.get('/hear', function (req, res) {
    const gtts = new Gtts(req.query.text, req.query.lang);
    gtts.stream().pipe(res);
  });
    
// Take any port number of your choice which 
// is not taken by any other process 
port = process.env.PORT || 3000
app.listen(port,function(error) { 
    if(error) throw error 
        console.log("Server created Successfully on PORT "+port) 
}) 
