const {
  addIntervention,
  getIntervention,
  getInterventionByID,
  getEtatIntervention,
  updateIntervention,
  getRDVIntervention,
  getTypeIntervention,
  deleteIntervention,
  countIntervention,
  countInterventionEtat
} = require("../services/interventionService");

get_intervention = async (req, res) => {
  res.send(await getIntervention());
};
delete_intervention = async (req, res) => {
  let num = req.params.id;
  res.send(await deleteIntervention(num));
};
get_intervention_byid = async (req, res) => {
  let num = req.params.id;
  res.send(await getInterventionByID(num));
};
add_intervention = async (req, res) => {
  let intervention = req.body;
  res.send(await addIntervention(intervention));
};
update_intervention = async (req, res) => {
  let intervention = req.body;
  res.send(await updateIntervention(intervention));
};
get_etat_intervention = async (req, res) => {
  let etat = req.params.etat;
  res.send(await getEtatIntervention(etat));
};
get_rdv_intervention = async (req, res) => {
  let rdv = req.params.rdv;
  res.send(await getRDVIntervention(rdv));
};
get_type_intervention = async (req, res) => {
  let type = req.params.type;
  res.send(await getTypeIntervention(type));
};
count_intervention = async (req, res) => {
  // console.log('count')
  //   const nbre_interventions = await getIntervention();
  //   console.log(nbre_interventions);
  //   res.send({ nbr: nbre_interventions.length });
  res.send (await countIntervention())
};
count_intervention_etat = async (req, res) => {
let etat=req.body.etat
  res.send (await countIntervention(etat))
};



module.exports = {
  get_intervention,
  add_intervention,
  get_etat_intervention,
  get_intervention_byid,
  update_intervention,
  get_rdv_intervention,
  get_type_intervention,
  delete_intervention,
  count_intervention,
  count_intervention_etat
};
