/* Created By Sithira Roneth
 * Date :3/29/25
 * Time :01:19
 * Project Name :Smart_Task_Manage-MicroService
 * */
package lk.ijse.taskservice.service;

import com.netflix.discovery.converters.Auto;
import lk.ijse.taskservice.entity.Task;
import lk.ijse.taskservice.repository.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskRepo taskRepository;
    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Optional<Task> getTaskById(String id) {
        return taskRepository.findById(id);
    }

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public List<Task> getTasksByAssignedUser(String assignedTo) {
        return taskRepository.findByAssignedTo(assignedTo);
    }

    @Override
    public Task updateTask(String id, Task task) {
//        Task existingTask = taskRepository.findById(id)
//                .orElseThrow(() -> new TaskNotFoundException("Task not found"));
//        existingTask.setTaskName(task.getTaskName());
//        existingTask.setDescription(task.getDescription());
//        existingTask.setDueDate(task.getDueDate());
//        existingTask.setStatus(task.getStatus());
//        existingTask.setPriority(task.getPriority());
//        existingTask.setAssignedTo(task.getAssignedTo());
//        existingTask.setUpdatedAt(LocalDateTime.now());
//        return taskRepository.save(existingTask);
        return null;
    }

    @Override
    public void deleteTask(String id) {
        taskRepository.deleteById(id);
    }
}
