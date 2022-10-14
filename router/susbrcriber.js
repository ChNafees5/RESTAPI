const express=require('express')
const router = express.Router()
const Subcribers= require ('../models/subrcribers')
//getting all
router.get ('/', async (req, res)=>{
    //res.send('Hello word')
    try {
        const subcriberss= await Subcribers.find()
        res.json( subcriberss)
    } catch(error) {
       res.status(500).json ({message: error.message})
    }
})

//getting one
router.get ('/:id', getsubcriber, (req, res)=>{
    res.send(res.subcribers.name)
})

//creating  all

router.post ('/', async(req, res)=> {
    const subrcribers1= new Subcribers({
        name: req.body.name,
        subcribertochanel: req.body.subcribertochanel

    })
    try {
        const newsubcriberss= await subrcribers1.save()
        res.status(201).json( newsubcriberss)
    } catch(error) {
       res.status(400).json ({message: error.message})
    }
})
     

//updating one
router.patch ('/:id',getsubcriber, async(req, res)=>{
if(req.body.name!= null){
    res.subcribers.name=req.body.name
}
if(req.body.subcribertochanel!= null){
    res.subcribers.subcribertochanel=req.body.subcribertochanel
}
try {
    const updatesubcriber = await res.subcribers.save()
    res.json(updatesubcriber)
} catch (error) { res.status(400).json ({message: error.message})
    
}
})


//Deleting one
router.delete ('/:id',getsubcriber, async(req, res)=>{
try {
    await res.subcribers.remove()
        
   res.json({message:'delete the subcriber'})
} catch (error) {
    res.status(500).json ({message: error.message})
     }
})
async function getsubcriber(req, res, next){
    let subcribers
    try {
        subcribers= await Subcribers.findById(req.params.id)

        if (subcribers == null){
        return res.status(404).json({message: 'Cannot find subcriber' })
        } 
    } 
    catch(error) {
       res.status(500).json ({message: error.message})
         }
    res.subcribers =subcribers
    next()
}
module.exports=router