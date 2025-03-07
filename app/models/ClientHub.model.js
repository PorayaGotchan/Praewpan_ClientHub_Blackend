module.exports = (sequelize, dataType) => {
    const ClientHub = sequelize.define("ClientHub", {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: dataType.STRING,
            allowNull: false
        },
        customernumber: {
            type: dataType.INTEGER,
            allowNull: false
        },
        email: {
            type: dataType.STRING,
            allowNull: false
        },
        date: {
            type: dataType.INTEGER,
            allowNull: false
        },
        total: {
            type: dataType.INTEGER,
            allowNull: false
        },
    });

    return ClientHub;
};