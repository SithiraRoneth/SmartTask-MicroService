/* Created By Sithira Roneth
 * Date :3/29/25
 * Time :15:24
 * Project Name :Smart_Task_Manage-MicroService
 * */
package lk.ijse.notificationservice.listener;

import lk.ijse.notificationservice.dto.NotificationRequest;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class NotificationListener {
    @RabbitListener(queues = "notificationQueue")
    public void receiveNotification(NotificationRequest notification) {
        System.out.println("Notification received :"+notification.getMessage());
    }
}
