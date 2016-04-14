var DataSourceTree = function(options) {
    this._data 	= options.data;
    this._delay = options.delay;
}

DataSourceTree.prototype.data = function(options, callback) {
    var self = this;
    var $data = null;

    if(!("name" in options) && !("type" in options)){
        $data = this._data;//the root tree
        callback({ data: $data });
        return;
    }
    else if("type" in options && options.type == "folder") {
        if("additionalParameters" in options && "children" in options.additionalParameters)
            $data = options.additionalParameters.children;
        else $data = {}//no data
    }

    if($data != null)//this setTimeout is only for mimicking some random delay
        setTimeout(function(){callback({ data: $data });} , parseInt(Math.random() * 500) + 200);

    //we have used static data here
    //but you can retrieve your data dynamically from a server using ajax call
    //checkout examples/treeview.html and examples/treeview.js for more info
};

var treeData = {
    'plane': {
        'name': '飞机类',
        'type': 'folder',
        'additionalParameters': {
            'children' : {
                'fighting' : {
                    'name': '战斗机',
                    'type': 'folder',
                    'additionalParameters': {
                        'children' : {
                            'F-22A' : {
                                'name': 'F-22A',
                                'type': 'item'
                            },
                            'F-22B' : {
                                'name': '<i class="light-grey">F-22B</i>',
                                'type': 'item'
                            }
                        }
                    }
                }
            }
        }
    },
    'ship': {
        'name': '战舰类',
        'type': 'folder',
        'additionalParameters': {
            'children' : {
                'fighting' : {
                    'name': '军舰',
                    'type': 'folder',
                    'additionalParameters': {
                        'children' : {
                            'F-22A' : {
                                'name': 'F-22A',
                                'type': 'item'
                            },
                            'F-22B' : {
                                'name': 'F-22B',
                                'type': 'item'
                            }
                        }
                    }
                },
                'fighting2' : {
                    'name': '普通舰',
                    'type': 'folder',
                    'additionalParameters': {
                        'children' : {
                            'F-22A' : {
                                'name': 'F-22A',
                                'type': 'item'
                            },
                            'F-22B' : {
                                'name': 'F-22B',
                                'type': 'item'
                            }
                        }
                    }
                }
            }
        }
    },
    'car': {
        'name': '车辆类',
        'type': 'folder',
        'additionalParameters': {
            'children' : {
                'fighting' : {
                    'name': '战斗机',
                    'type': 'folder',
                    'additionalParameters': {
                        'children' : {
                            'F-22A' : {
                                'name': 'F-22A',
                                'type': 'item'
                            },
                            'F-22B' : {
                                'name': '<i class="light-grey">F-22B</i>',
                                'type': 'item'
                            }
                        }
                    }
                }
            }
        }
    },
    'missile': {
        'name': '导弹类',
        'type': 'folder',
        'additionalParameters': {
            'children' : {
                'fighting' : {
                    'name': '战斗机',
                    'type': 'folder',
                    'additionalParameters': {
                        'children' : {
                            'F-22A' : {
                                'name': 'F-22A',
                                'type': 'item'
                            },
                            'F-22B' : {
                                'name': '<i class="light-grey">F-22B</i>',
                                'type': 'item'
                            }
                        }
                    }
                }
            }
        }
    }
}




var treeDataSource = new DataSourceTree({data: treeData});


























