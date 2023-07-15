const { DataTypes } = require("sequelize")

const sequlelize = require("../db")



// // USer Model
const User = sequlelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const Basket = sequlelize.define("basket", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },

})

const BasketDevice = sequlelize.define("basket_device", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
})

const Device = sequlelize.define("device", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, dafultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false }
})

const Type = sequlelize.define("type", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },

})
const Brand = sequlelize.define("brand", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    //   
})

const Rating = sequlelize.define("rating", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
    rate: { type: DataTypes.INTEGER, alloqNull: false }
})

const DeviceInfo = sequlelize.define("device_info", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false }
})


const TypeBrand = sequlelize.define("type_brand", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },

})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)
Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo) 
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand,{through : TypeBrand})
Brand.belongsToMany(Type,{through : TypeBrand})

module.exports = {
    User, Basket
}