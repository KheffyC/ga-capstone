const User = require('../../models/user')
const Profile = require('../../models/profile')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const profile = require('../../models/profile')


module.exports={
    create,
    login,  
    checkToken,
}


async function create(req, res){
    try{
        const user = await User.create(req.body)
        const profileObj = {
            username: user.name,
            user: user._id,
        }
        const profile = await Profile.create(profileObj)
        const token = createJWT(user)
        res.json(token)
    } catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function login(req, res){
    try {
        const user = await User.findOne({ email : req.body.email})
        if (!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()
        res.json( createJWT(user) )
    } catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

function checkToken(req, res){
    console.log(req.user, 'req.user')
    res.json(req.exp)
}

/*-- HELPER FUNCTIONS --*/

function createJWT(user){
    return jwt.sign(
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    );
}

