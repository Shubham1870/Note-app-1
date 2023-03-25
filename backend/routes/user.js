const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const dotenv=require("dotenv")
const usermodel=require("../models/user")
const cors=require("cors")
const jwt=require("jsonwebtoken")

const salt=10
dotenv.config()
router.use(cors())

router.get("/alluser",async (req,res)=>{
    try{
        const data=await usermodel.find()
        res.status(200).json({
            status:"success",
            data
        })
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:err.message
        })
    }
})

router.post("/signup",async(req,res)=>{
    try{
        const {email,password,confirmpassword}=req.body
        if(!email||!password||!confirmpassword){
            return res.status(400).json({
                status:"failed",
                message:"all fields required"
            })
        }
        const present =await usermodel.findOne({email})
        if(present){
            return res.status(400).json({
                status:"failed",
                message:"user already registered"
            })
        }
        if(password!==confirmpassword){
            return res.status(400).json({
                status:"failed",
                message:"pass do not match"
            })
        }
        bcrypt.hash(password,salt,async function (err,hash){
            if(err){
                return res.status(400).json({
                    message:err.message
                })
            }
            const userdata=await usermodel.create({
                email,
                password:hash
            })
            return res.status(200).json({
                status:"success",
                userdata
            })
        })
    }
    catch(err){
        return res.status(500).json({
            message:"failed"
        })
    }
})

router.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email&&password){
            return res.status(400).json({
                status:"failed",
                message:'all fields required'
            })
        }
        const data=await usermodel.findOne({email})
        if(!data){
            return res.status(400).json({
                status:"failed",
                message:"user not registered"
            })
        }
        bcrypt.compare(password,data.password,function(err,result){
            if(err){
                return res.status(400).json({
                    status:"failed",
                    message:err.message
                })
            }
            if(result){
                const token=jwt.sign({
                    payload:data._id
                },process.env.SECRET_KEY)
                return res.status(200).json({
                    status:"success",
                    message:"login successfull",
                    token,id:data._id
                })
            }else{
                return res.status(400).json({
                    status:"failed",
                    message:"not a valid password"
                })
            }
        })
    }catch(err){
        return res.status(400).json({
            status:"failed",
            message:err.message
        })
    }
})
module.exports=router