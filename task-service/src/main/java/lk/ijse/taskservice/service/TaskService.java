package lk.ijse.taskservice.service;

import lk.ijse.taskservice.entity.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    Task createTask(Task task);
    Optional<Task> getTaskById(String id);
    List<Task> getAllTasks();
    List<Task> getTasksByAssignedUser(String assignedTo);
    Task updateTask(String id, Task task);
    void deleteTask(String id);
}
