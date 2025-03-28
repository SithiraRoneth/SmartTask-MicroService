/* Created By Sithira Roneth
 * Date :3/29/25
 * Time :01:14
 * Project Name :Smart_Task_Manage-MicroService
 * */
package lk.ijse.taskservice.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "tasks")
public class Task {
    @Id
    private String id;

    @NotBlank(message = "Task name is required")
    private String taskName;

    private String description;
    private LocalDateTime dueDate;
    private String status;
    private String priority;
    private String assignedTo;

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt = LocalDateTime.now();
}
