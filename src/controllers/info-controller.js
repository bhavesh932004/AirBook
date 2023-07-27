function info(req, res){
	res.status(200).json({
		success : "true", 
		message : "API is live, info page",
		error : {},
		data : {}
	});
}

module.exports = info;

