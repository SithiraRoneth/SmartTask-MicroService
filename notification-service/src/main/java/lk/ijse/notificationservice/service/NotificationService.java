/* Created By Sithira Roneth
 * Date :3/29/25
 * Time :15:24
 * Project Name :Smart_Task_Manage-MicroService
 * */
package lk.ijse.notificationservice.service;

import lk.ijse.notificationservice.dto.NotificationRequest;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static lk.ijse.notificationservice.config.RabbitMQConfig.EXCHANGE_NAME;

@Service
public class NotificationService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void sendNotification(NotificationRequest notification) {
        rabbitTemplate.convertAndSend(EXCHANGE_NAME,"notification.key",notification);
        System.out.println("Notification Send: " + notification.getMessage());
    }
}
