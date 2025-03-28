package lk.ijse.taskservice.repository;

import lk.ijse.taskservice.entity.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepo extends MongoRepository<Task, String> {
}
