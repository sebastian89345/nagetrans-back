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
    // Extras
    date:String,
    oilChange:String,
    currentKm:String,    
    observation:String,
    //ESTADO DE PRESENTACIÓN
    internalToilet:String,
    externalToilet:String,
    cans:String,
    paint:String,
    //ESTADO DE COMODIDAD
    airConditioning:String,
    silletería:String,
    lighter:String,
    interiorOrCeilingLight:String,
    //NIVELES Y PERDIDA DE LIQUIDOS
    engineOilLevel:String,
    brakeFluidLevel:String,
    radiatorWaterLevel:String,
    batteryWaterLevel:String,
    hydraulicOilLevel:String,
    acpmLeaks:String,
    waterLeaks:String,
    transmissionOilLeaks:String,
    boxOilLeak:String,
    brakeFluidLeaks:String,
    //TABLERO DE CONTROL
    tableLight:String,
    fuelLevel:String,
    odometer:String,
    whistle:String,
    tachometer:String,
    speedometer:String,
    oilIndicator:String,
    temperatureIndicator:String,
    //SEGURIDAD PASIVA
    seatBelts:String,
    airbags:String,
    crystals:String,
    headrest:String,
    mirrorStatus:String,
    rightSideMirror:String,
    leftSideMirror:String,
    rearViewMirror:String,
    //SEGURIDAD ACTIVA
    addressStatus:String,
    frontSuspensionCondition:String,
    shockAbsorbers:String,
    rearSuspensionStatus:String,
    windshieldCondition:String,
    frontGlass:String,
    //ESTADO LUCES
    mediumLights:String,
    highBeams:String,
    lowLights:String,
    leftDirectionalFront:String,
    directionalRightFront:String,
    leftDirectionalRear:String,
    directionalRightRear:String,
    parkingLights:String,
    brakeLight:String,
    reverseLight:String,
    explorerFogLights:String,
    //ESTADO LLANTAS
    RightFront:String,
    LeftFront:String,
    RightRear:String,
    RearLeft:String,
    Replacement:String,
    TireAirPressure:String,
    //FRENOS
    BrakeCondition:String,
    HandBrake:String,
    Tablets:String,
    //EQUIPO DE CARRETERA
    oneJackWithTheCapacityToRaiseTheVehicle:String,
    oneReflectiveVest:String,
    twoBlocksToBlockTheVehicle:String,
    twoRoadSigns:String,
    onePairOfIndustrialGloves:String,
    oneCrosshead:String,
    fireExtinguisher:String,
    flashLight:String,
    toolBox:String,
    firstAidKit:String,
    //DOCUMENTOS DEL VEHÍCULO
    soat:String,
    technomechanicalReviewAndGasCertification:String,
    contractualAndNonContractualInsurance:String,
    preventive:String,
    operationCard:String,
    propertyCard:String,
    drivingLicense:String,
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('listCheck', listCheckSchema);