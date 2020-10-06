import joi from "joi";

const schema = joi.object().keys({
    task: joi.string().required(),
    issuer: joi.string().required(),
    issueDate: joi.date().required(),
    turnInDate: joi.date().required()
});

const validateTodo = (todo) => {
    const operation = schema.validate(todo);

    if(operation.error){
        return operation.error.details[0].message;
    }

    return "valid";
}

export {validateTodo, schema};