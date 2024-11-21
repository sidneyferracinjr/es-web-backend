var express = require('express');
var Task = require("../model/Tasks")
var TaskSchema = require("../validators/TaskValidator")
const Joi = require("joi")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (Task.list().length == 0) {
    Task.new("Tarefa 1");
    Task.new("Tarefa 2");
  }

  let obj = Task.getElementById(req.query.tid);
  res.render('index', { tasks: Task.list(), task: obj });
});

// Rota para mostrar o número de tarefas
router.get("length", function(req, res, next){
  res.render("get-length", {length: Task.getLength()});
});

// Rota para inserir tarefas
router.post("/tarefas", function (req, res){
    const {error, value} = TaskSchema.validate(req.body);
    if (error) {
      res.render('index', { tasks: Task.list(), erro: "Dados incompletos" });
      return;
    }
    
    const {id, nome} = value
    if (id === undefined) {
      //Inserir
      Task.new(nome);
    } else {
      //Alterar
      Task.update(id, nome);
    }
    
    res.redirect("/");
});

// Rota para exibir tarefas
router.get('/list', function(req, res, next) {
  if(Task.list().length == 0){
    res.render('list-all', {msg: "Nenhuma tarefa encontrada"});
  } else {
    let obj = Task.getElementById(req.query.tid);
    res.render('list-all', { tasks: Task.listAtoZ(), task: obj });
  }
});

// Rota para excluir tarefas
router.get("/tarefas/del/:id", function(req, res){
  const {id} = req.params;
  const {error, value} = Joi.number().integer().greater(0).validate(id)

  if (error || !Task.delete(value)) {
    res.send("Falha ao excluir uma tarefa");
    return;
  }
  res.redirect("/");
});

module.exports = router;
