package lk.ijse.taskservice.repository;

import lk.ijse.taskservice.entity.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface TaskRepo extends MongoRepository<Task, String> {
    List<Task> findByAssignedTo(String assignedTo);
    Optional<Task> findById(String id);
}
