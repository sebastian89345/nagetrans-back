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
    date:String,
    oilChange:String,
    currentKm:String,
    engineOilIndicator:String,
    fuelLevel:String,
    Whistle:String,
    BatteryIndicator:String,
    emergencyBrake:String,
    chairCushions:String,
    wiperWasher:String,
    internalLights:String,
    instrumentSpeedometerDashboard:String,
    engineOil:String,
    hydraulicOilSteering:String,
    coolantLiquid:String,
    brakeFluid:String,
    fuelcap:String,
    beltTension:String,
    mirrorGlass:String,
    highLowBeams:String,
    turnSignals:String,
    logoPlates:String,
    tires:String,
    deviceSpeed:String,
    safetyBelts:String,
    firstaidkit:String,
    Extinguisher:String,
    dateExtinguisherExpiration:String,
    roadTeam:String,
    spareTire:String,
    observation:String,
    largeTent:String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('listCheck', listCheckSchema);