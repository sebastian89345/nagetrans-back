var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const listCheckSchema = new Schema({
    
    userVehicle: [{
        ref:"users",
        type:Schema.Types.ObjectId
    }],
    userDriver: [{
        ref:"users",
        type:Schema.Types.ObjectId
    }],
    // preguntar
    date:String,
    oilChange:String,
    currentKm:String,    
    observation:String,
    dateExtinguisherExpiration:String,
    //revision Interna
    wiperWasher:String,
    emergencyBrake:String,
    whistle:String,
    safetyBelts:String,
    GlassLifter:String, 
    Lightning:String, 
    //Revisión Externa
    directionals:String,
    Stationary:String,
    highBeams:String,
    lowLights:String,
    stop:String,
    reverse:String, 
    battery:String,
    tireWear:String,
    tireCondition:String,
    tireAirPressure:String,
    //Motor
    engineLeaks:String, 
    brakeLeaks:String, 
    beltTension:String,
    wetFilters:String, 
    //Niveles
    motorOil:String,
    transmissionOil:String,
    refrigerant:String,
    windshieldWiperWater:String,
    radiatorAdditives:String,
    roadTeam:String,
    firstAidKit:String,
    //Kit Herramientas
    extinguisher:String,
    crossPiece:String,
    cat:String,
    tacos:String,
    signs:String,
    vest:String,
    flashlight:String,
    //Elementos de bioseguridad
    gloveHolder:String,
    wearYourFaceMask:String,
    antibacterialGelOrAlcoholHolder:String,        
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('listCheck', listCheckSchema);