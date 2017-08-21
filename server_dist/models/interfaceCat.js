'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _yapi = require('../yapi.js');

var _yapi2 = _interopRequireDefault(_yapi);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 接口分类
 */
var interfaceCat = function (_baseModel) {
    (0, _inherits3.default)(interfaceCat, _baseModel);

    function interfaceCat() {
        (0, _classCallCheck3.default)(this, interfaceCat);
        return (0, _possibleConstructorReturn3.default)(this, (interfaceCat.__proto__ || (0, _getPrototypeOf2.default)(interfaceCat)).apply(this, arguments));
    }

    (0, _createClass3.default)(interfaceCat, [{
        key: 'getName',
        value: function getName() {
            return 'interface_cat';
        }
    }, {
        key: 'getSchema',
        value: function getSchema() {
            return {
                name: { type: String, required: true },
                uid: { type: Number, required: true },
                project_id: { type: Number, required: true },
                desc: String,
                add_time: Number,
                up_time: Number
            };
        }
    }, {
        key: 'save',
        value: function save(data) {
            var m = new this.model(data);
            return m.save();
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this.model.findOne({
                _id: id
            }).exec();
        }
    }, {
        key: 'checkRepeat',
        value: function checkRepeat(name) {
            return this.model.count({
                name: name
            });
        }
    }, {
        key: 'list',
        value: function list(project_id) {
            return this.model.find({
                project_id: project_id
            }).exec();
        }
    }, {
        key: 'del',
        value: function del(id) {
            return this.model.deleteOne({
                _id: id
            });
        }
    }, {
        key: 'delByProjectId',
        value: function delByProjectId(id) {
            return this.model.deleteMany({
                project_id: id
            });
        }
    }, {
        key: 'up',
        value: function up(id, data) {
            data.up_time = _yapi2.default.commons.time();
            return this.model.update({
                _id: id
            }, data);
        }
    }]);
    return interfaceCat;
}(_base2.default);

module.exports = interfaceCat;