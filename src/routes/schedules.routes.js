const { Router } = require('express')
const ScheduleController = require('../controllers/schedule.controller')

const router = Router()

const controller = new ScheduleController()

router.get('/', async (req, res) => {
    const schedules = await controller.index()
    res.json({ schedules })
})
router.post('/', async (req, res) => {
    const { name, start_date, end_date, start_time, end_time, place, status } = req.body
    const schedule = await controller.create(name, start_date, end_date, start_time, end_time, place, status)
    res.status(201).json({ schedule })

})
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const schedule = await controller.findOne(id)
        res.status(200).json({ schedule })
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
})
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, start_date, end_date, start_time, end_time, place, status } = req.body;

    const valuesToUpdate = {};

    if (name) valuesToUpdate.name = name;
    if (start_date) valuesToUpdate.start_date = start_date;
    if (end_date) valuesToUpdate.end_date = end_date;
    if (start_time) valuesToUpdate.start_time = start_time;
    if (end_time) valuesToUpdate.end_time = end_time;
    if (place) valuesToUpdate.place = place;
    if (status) valuesToUpdate.status = status;

    try {
        const schedule = await controller.update(id, valuesToUpdate);
        res.status(200).json({ schedule });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const schedule = await controller.delete(id)
        res.status(200).json({ schedule })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})
router.post('/attendance', async (req, res) => {
    const { schedule_id, user_id } = req.body
    const attendance = await controller.createAttendance(schedule_id, user_id)
    res.status(201).json({ attendance })

})
router.get('/attendance/:schedule_id/', async (req, res) => {
    const { schedule_id } = req.params
    const { user_id, start_date, end_date } = req.query
    const attendance = await controller.findBy(schedule_id, user_id, start_date, end_date)
    res.json({ attendance })
})
module.exports = router